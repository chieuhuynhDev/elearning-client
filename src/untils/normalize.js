export const normalizeString = (str) => {
  if (typeof str !== "string") {
    return ""; // Nếu không phải string, trả về chuỗi rỗng
  }

  const map = {
    à: "a",
    á: "a",
    ạ: "a",
    ả: "a",
    ã: "a",
    è: "e",
    é: "e",
    ẹ: "e",
    ẻ: "e",
    ẽ: "e",
    ì: "i",
    í: "i",
    ị: "i",
    ỉ: "i",
    ĩ: "i",
    ò: "o",
    ó: "o",
    ọ: "o",
    ỏ: "o",
    õ: "o",
    ù: "u",
    ú: "u",
    ụ: "u",
    ủ: "u",
    ũ: "u",
    ỳ: "y",
    ý: "y",
    ỵ: "y",
    ỷ: "y",
    ỹ: "y",
    đ: "d",
  };

  return str
    .replace(
      /[àáạảãèéẹẻẽìíịỉĩòóọỏõùúụủũỳýỵỷỹđ]/g,
      (match) => map[match] || match
    ) // Thay thế ký tự tiếng Việt
    .toLowerCase() // Chuyển về chữ thường
    .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    .replace(/\s+/g, "") // Loại bỏ tất cả khoảng trắng, kể cả giữa các ký tự
    .replace(/[^a-z0-9]/g, ""); // Loại bỏ ký tự đặc biệt
};
