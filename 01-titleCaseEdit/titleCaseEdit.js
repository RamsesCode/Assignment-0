function titleCaseEdit(title) {
  if (typeof title === `string`){
    return title
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
}

// Do not edit this line;
module.exports = titleCaseEdit;