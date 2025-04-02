let book = [
    {
        id: 1,

        title: "young",

        author: "party fray",

        year: 2000,

        price: 1900,

        isAvailable: true
    },
    {
        id: 2,

        title: "old",

        author: "lena",

        year: 1999,

        price: 1200,

        isAvailable: false
    }
]
let check = 1, count = 1, dai = book.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm sách mới.
        2. Hiển thị danh sách sách.
        3. Tìm kiếm sách theo tiêu đề.
        4. Cập nhật trạng thái mượn/trả sách theo id sách.
        5. Xóa sách theo id sách ra khỏi danh sách.
        6. Sắp xếp sách theo giá tăng dần.
        7. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let title = prompt("mời bạn nhập tên sách: ");
            let author = prompt("mời bạn nhập tác giả: ");
            let year = prompt("mời bạn nhập năm sản xuất: ");
            let price = prompt("mời bạn nhập giá sách: ");
            dai += 1;
            let temp = {
                id: dai,
                title: title,
                author: author,
                year: year,
                price: price,
                isAvailable: true,
            }
            book.push(temp);
            alert("thêm sách thành công")
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                    alert(book.map(s=>`Id: ${s.id} - tên sách:${s.title} - tác giả:${s.author} - năm:${s.year} - giá:${s.price} - trạng thái:${s.isAvailable}`).join("\n"))
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                let de = +prompt("mời bạn nhập tiêu đề: ")
                if (!isNaN(de)) {
                    alert("tiêu đề không hợp lệ")
                } else {
                    let index = book.filter(s=>s.title.toLowerCase().includes(de.toLowerCase()));
                    if (index.length===0) {
                        alert("không có tiêu đề của bạn nhập")
                    } else {
                        alert(index.map(s=>`Id: ${s.id} - tên sách:${s.title} - tác giả:${s.author} - năm:${s.year} - giá:${s.price} - trạng thái:${s.isAvailable}`).join("\n"))
                    }
                }
            }
            break;
        case 4:
            if (book.length === 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let id = +prompt("Mời bạn nhập id để tìm kiếm: ");
                if (isNaN(id)) {
                    alert("Không hợp lệ");
                    break;
                } else {
                    let thay = book.findIndex(i=>i.id===id);
                    if (thay != -1) {
                        alert(` sách bạn nhập đang là ${book[thay].isAvailable?"đang mượn":"chưa mượn"}`)
                        let check=+prompt("nhập 1 là mượn, 2 là trả: ")
                        if(isNaN(check)){
                            alert("không hợp lệ")
                            break
                        }else{
                            if(check===1){
                                book[thay].isAvailable=true;
                                alert(` sách bạn nhập thành ${book[thay].isAvailable?"đang mượn":"chưa mượn"}`)
                            }else{
                                book[thay].isAvailable=false;
                                alert(` sách bạn nhập thành ${book[thay].isAvailable?"đang mượn":"chưa mượn"}`)
                            }
                        }
                    } else {
                        alert("Không tìm thấy");
                    }
                }
            }
            break;
        case 5:
            let id=+prompt("mời bạn nhập id để xóa: ")
            if(isNaN(id)||id<0){
                alert("không hợp lệ")
            }else{
                let index=book.findIndex(s=>s.id===id)
                book.splice(index,1)
                alert(book.map(s=>`Id: ${s.id} - tên sách:${s.title} - tác giả:${s.author} - năm:${s.year} - giá:${s.price} - trạng thái:${s.isAvailable}`).join("\n"))
            }
            break
        case 6:
            for(let i=0;i<book.length-1;i++){
                for(let y=0;y<book.length-1-i;y++){
                    if(book[y].price>book[y+1].price){
                        let temp=book[y]
                        book[y]=book[y+1]
                        book[y+1]=temp
                    }
                }
            }
            alert(book.map(s=>`Id: ${s.id} - tên sách:${s.title} - tác giả:${s.author} - năm:${s.year} - giá:${s.price} - trạng thái:${s.isAvailable}`).join("\n"))
            break;
        case 7:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
