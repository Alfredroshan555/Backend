const customModule = () => {
  console.log("This is a custom module");

  return "Server running on ::";
};

// Exporting a module/function
module.exports = { customModule };
