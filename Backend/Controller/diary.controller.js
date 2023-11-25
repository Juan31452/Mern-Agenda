import Diary from '../Model/model.diary.js'

//Ver tareas
export const getDiarys = async (req,res) =>{
    try {
       console.log(req.user.id)
       const diarys = await Diary.find({ cliente : req.user.id }).populate("cliente");
        res.json(diarys);
      } catch (error) {
       return res.status(500).json({ message: error.message });
      }

};

//Crear tareas
export const createDiary = async(req,res) =>{
    //console.log(req.user.id);
    try 
    {
      const { mydate, precio, estado } = req.body;
      const newDiary = new Diary({
       mydate,
       precio,
       estado,
       cliente: req.user.id,  
      });

        console.log(newDiary); 
        const saveDiary = await newDiary.save();
        res.json(saveDiary);
     } catch (error) {
        return res.status(500).json({ message: error.message });
     }
};

//Ver una tarea
export const getDiary = async(req,res) =>{
    try {
        const diary = await Diary.findById(req.params.id);
        if (!diary) return res.status(404).json({ message: "Diary not found" });
        return res.json(diary);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

//Actualizar tarea
export const updateDiary = async(req,res) =>{
    try {
        const { fecha, cliente, precio, estado } = req.body;
        const diaryUpdated = await Diary.findOneAndUpdate(
          { _id: req.params.id },
          { fecha, cliente, precio, estado },
          { new: true } //actualizar Datos
        );
        return res.json(diaryUpdated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

//Eliminar tarea
export const deleteDiary = async(req,res) =>{
    try {
     const deletedDiary = await Diary.findByIdAndDelete(req.params.id);
      if (!deleteDiary)
      return res.status(404).json({ message: "Diary not found" });
     
     return res.sendStatus(204);
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }

};