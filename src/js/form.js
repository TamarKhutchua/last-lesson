// TODO: დაასრულეთ შემდეგი ფუნქციები
function renderUsers(usersArray) {
  // TODO: usersArray არის სერვერიდან დაბრუნებული ობიექტების მასივი
  // TODO: ამ მონაცმების მიხედვით html ში ჩასვით ცხრილი როგორც "ცხრილი.png" შია

  let usersMarkup = "";

  for (let i = 0; i < usersArray.length; i++) {
    const user = usersArray[i];
    const userMarkup = `
        <div class="user">
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        </div>
      `;
    usersMarkup += userMarkup;
  }

  document.getElementById("users-container").innerHTML = usersMarkup;
}

console.log(usersArray);
userActions(); // ყოველ რენდერზე ახლიდან უნდა მივაბათ ივენთ ლისნერები

// TODO: დაასრულე
function userActions() {
  // 1. ცხრილში ღილაკებზე უნდა მიამაგროთ event listener-ები
  // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა როგორც "ცხრილი.png" ში ჩანს
  // 3. id შეინახეთ data-user-id ატრიბუტად ღილაკებზე, data ატრიბუტებზე წვდომა შეგიძლიათ dataset-ის გამოყენებით მაგ:selectedElement.dataset
  // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deleteUser ფუნქციის მეშვეობით) სერვერზე და გადაეცეს id
  // 5. ედიტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი. ედიტის ღილაკზე უნდა გამოიძახოთ getUser ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას (ობიექტს და არა მასივს)  ეს დატა უნდა შეივსოს ფორმში და ამის შემდეგ შეგიძლიათ დააედიტოთ ეს ინფორმაცია. ფორმის დასაბმითებისას უნდა მოხდეს updateUser() ფუნქციის გამოძახება, სადაც გადასცემთ განახლებულ იუზერის ობიექტს, გვჭირდება იუზერის აიდიც, რომელიც  მოდალის გახსნისას user_id-ის (hidden input არის და ვიზუალურად არ ჩანს) value-ში შეგიძლიათ შეინახოთ
}

function getAllUsers() {
  fetch("https://borjomi.loremipsum.ge/api/all-users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.users);
      // html-ში გამოტანა მონაცემების
      renderUsers();
    })
    .catch((err) => console.log(err));
}

function getUser(id) {
  fetch(`https://borjomi.loremipsum.ge/api/get-user/${id}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      // გვიბრუნებს იუზერის ობიექტს
      console.log(data);
      //TODO: შენახვის, ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateUser(userObj) {
  // მიიღებს დაედითებულ ინფორმაციას და გააგზავნით სერვერზე
  // TODO დაასრულეთ ფუნქცია
  //  method: "put",  https://borjomi.loremipsum.ge/api/update-user/${userObj.id}
  // userObj -იც უნდა გადასცეთ როგორც addNewUser ფუნქიაში
  // TODO: შენახვის, ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
}

getAllUsers();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userGender = document.querySelector("[name='gender']:checked");

  const userObj = {
    id: user_id.value, //ეს #user_id hidden input გვაქვს html-ში და ამას გამოვიყენებთ მხოლოდ დაედითებისთვის
    first_name: userName.value,
    last_name: userLastName.value,
    phone: userMobile.value,
    id_number: userPersonalId.value,
    email: userEmail.value,
    gender: userGender.value,
    zip_code: userZipCode.value,
  };

  // addNewUser(userObj);

  //  TODO: თუ user_id.value არის ცარიელი (თავიდან ცარიელია) მაშინ უნდა შევქმნათ  --> addNewUser(userObj)

  // თუ დაედითებას ვაკეთებთ, ჩვენ ვანიჭებთ მნიშვნელობას userActions ფუნქციაში
  // TODO: თუ user_id.value არის (არაა ცარიელი სტრინგი) მაშინ უნდა დავაედიტოთ, (როცა ფორმს ედითის ღილაკის შემდეგ იუზერის ინფუთით ვავსებთ, ვაედითებთ და ვასაბმითებთ) -->  updateUser(userObj);
});
