import {
  Schema,
  model,
  type SchemaDefinition,
  type SchemaOptions,
} from "mongoose";

const definition: SchemaDefinition = {
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
};

const options: SchemaOptions = { timestamps: true };

const schema = new Schema(definition, options);

export default model("Workout", schema);
