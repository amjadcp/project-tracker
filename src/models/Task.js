import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema(
  {
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
    },
    task: {
      type: String,
      required: [true, "Please provide task"],
      minlength: 3,
      trim: true,
    },
    status: {
        type: String,
        required: [true, "Please provide status"],
        enum: ["todo", "inprogress", "done", "overdue"],
        default: "todo",
    },
    assignTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }]
  },
  { timestamps: true }
);

const Task = mongoose.model("task", TaskSchema);

export default Task;