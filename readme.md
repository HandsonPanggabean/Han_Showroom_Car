planning

bikin ejs home isinya: 
Welcome to blablabla showroom car [o]

login : ada kolom isi [o]
password: ada kolom isi [o]
button login

dont have any account? sign up here (render ke halaman signup (method create)) [o]

validasi
isi nya kolom username (string) [o]
isi nya kolom password (string) [o]
isi nya kolom umur (integer) [o]
isi nya kolom email (string) [o]
isi nya kolom phoneNumber (string) [o]
isi nya kolom gender (string) [o]
jangan lupa button signup [o]
postnya ngeredirect ke halaman home untuk  [o]
setelah berhasil login akan ngeredirect ke greeting [o] 
isinya username age email phone_number gender dan option (beberapa)
buat tombol option buy car yang bakal ngeredirect ke halaman list car

isi di list car = merek release_year [o]

harusnya udah terdaftar di list customer dan sudah bisa ditampilkan jika melihat url yang ngerender ke customer

didalam 

pertanyaan:
* buy kalau ditekan kan mengurangi 1 dari jumlah stocknya
nah untuk mendapatkan bahwa si user tsb membeli barang itu dengan menekan buy gimana ya bang?

* password di method post sign up gimana cara buatnya jadi hasbcrypt kedata base, dan buatnya dimana bang

requirement: 
- Association Many to Many done
- CRUD ( CREATE, READ, UPDATE, DELETE ) done
- Static Method (Model) done
- Instance Method (Model) done
- Helper done
- Hooks done
- MVP (explore)
- Middleware  * done
- Session * done (login), jangan lupa di idupin isloginnya
- Deploy pada Heroku (explore)


bikin post utk route home (nulis ke req.sessionnya didalam filenya)
didalam req.session itu ada isinya

di dalam routerpost nanti bakal nerima req body, yang akan di compare sama database column apakah match, jika match, req.sesion.isLogin nya di reasign jadi true didalam controller log in button 

didalam controller loginbutton bisa redirect ke greetings page

