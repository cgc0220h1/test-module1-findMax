let scoreArr = [];

function addNumberArray(array) {
    let index = 1;
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào điểm thứ: " + index + " . Nhấn cancel để lưu lại điểm");
        if (isNaN(input)) {
            alert("Số không hợp lệ do dữ liệu nhập vào là ký tự. Vui lòng nhập lại.");
        } else if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào")
        } else if (input < 0) {
            alert("Điểm số không có giá trị âm, vui lòng nhập lại")
        } else {
            array.push(+input);
            index++;
        }
    }
    array.pop();
    return array;
}

function findMax(array) {
    let max = array[0];
    for (let index = 1; index <= array.length; index++) {
        if (max < array[index]) {
            max = array[index];
        }
    }
    return max;
}

function start() {
    addNumberArray(scoreArr);
    alert("Các điểm vừa nhập vào lần lượt là: " + scoreArr.join(", "));
    let result = findMax(scoreArr);
    alert("Điểm số lớn nhất là: " + result);
    scoreArr = [];
}