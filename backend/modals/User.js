const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    // Sayfamızdaki category yapısını inceleyerek hangi verilere ihtiyacımız olduğunu kurgulamalıyız.
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;