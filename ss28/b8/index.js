
let staff = [
    {
        id: 1,
        name: "thanh cường",
        position: "giám đốc",
        salary: 99999,
    },
    {
        id: 2,
        name: "long nhật",
        position: "nhân viên",
        salary: 10,
    },
    {
        id: 3,
        name: "tấn hãm",
        position: "bóc vác",
        salary: 1,
    },
];
let check = 1, count = 1,dai=staff.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm nhân viên mới.
        2. Xóa nhân viên
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let name = prompt("mời bạn nhập tên: ");
            let position = prompt("mời bạn nhập chức vụ: ");
            let salary = prompt("mời bạn nhập mức lương: ");
            dai+=1;
            let temp = {
                id: dai,
                name: name,
                position: position,
                salary: salary,
            }
            staff.push(temp);
            alert(staff.map(s => `số thứ tự:${s.id}: tên ${s.name} -chức vụ: ${s.position} -lương: ${s.salary}`).join("\n"));
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                let num=+prompt("mời bạn nhập số thứ tự: ")
                if(isNaN(num)||num<0){
                    alert("số ko hợp lệ")
                }else{
                    let index=staff.findIndex((id)=>id.id===num);
                    if(index===-1){
                        alert("không có số của bạn nhập")
                    }else{
                        let close=prompt("bạn có chắc xóa nhân viên không(true/false): ")
                        if(close==="true"){
                            staff.splice(index,1)
                            alert("đã xóa nhân viên thành công")
                            alert(staff.map(s => `số thứ tự:${s.id}: tên ${s.name} -chức vụ: ${s.position} -lương: ${s.salary}`).join("\n"));
                        }else if(close==="false"){
                            alert("đã hủy")
                            break
                        }else{
                            alert("không hợp lệ")
                            break
                        }
                    }
                }
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                let num=+prompt("mời bạn nhập số thứ tự: ")
                if(isNaN(num)||num<0){
                    alert("số ko hợp lệ")
                }else{
                    let index=staff.findIndex((id)=>id.id===num);
                    if(index===-1){
                        alert("không có số của bạn nhập")
                    }else{
                        let luong=+prompt("mời bạn nhập lương cho nhân viên")
                            staff[index].salary=luong;
                            alert("đã thay đổi lương của nhân viên thành công")
                            alert(staff.map(s => `số thứ tự:${s.id}: tên ${s.name} -chức vụ: ${s.position} -lương: ${s.salary}`).join("\n"));
                    }
                }
            }
            break;
            case 4:
                if (staff.length === 0) {
                    console.log("Chưa có phần tử trong mảng");
                } else {
                    let ten = prompt("Mời bạn nhập tên để tìm kiếm: ");
                    if (!isNaN(ten)) {
                        alert("Không hợp lệ!");
                        break;
                    } else {
                        let thay = staff.filter(employee => 
                            employee.name.toLowerCase().includes(ten.toLowerCase())
                        );
            
                        if (thay.length > 0) {
                            alert(thay.map(s => `Số thứ tự:${s.id}: Tên ${s.name} -Chức vụ: ${s.position} - Lương: ${s.salary}`).join("\n"));
                        } else {
                            alert("Không tìm thấy nhân viên");
                        }
                    }
                }
                break;
        case 5:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);