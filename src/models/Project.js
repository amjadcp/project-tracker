import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      trim: true,
    },
    team: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }]
  },
  { timestamps: true }
);

const Project = mongoose.model("project", ProjectSchema);

export default Project;