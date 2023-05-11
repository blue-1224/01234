// 텍스트 추가하기
function addText() {
    var text = prompt("추가할 텍스트를 입력하세요.");
    if (text != null) {
      document.getElementById("content").value += text + " ";
    }
  }
  
  // 이미지 추가하기
  function addImage() {
    var url = prompt("추가할 이미지 URL을 입력하세요.");
    if (url != null) {
      var img = '<img src="' + url + '">';
      document.getElementById("content").value += img + " ";
    }
  }
  
  // 표 추가하기
  function addTable() {
    var rows = prompt("추가할 표의 행 수를 입력하세요.");
    var cols = prompt("추가할 표의 열 수를 입력하세요.");
    if (rows != null && cols != null) {
      var table = "<table>";
      for (var i = 0; i < rows; i++) {
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
          table += "<td></td>";
        }
        table += "</tr>";
      }
      table += "</table>";
      document.getElementById("content").value += table + " ";
    }
  }