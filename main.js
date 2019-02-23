firebase.initializeApp({
  apiKey: "AIzaSyBiX9yJ4DoRd8hTGdGkbDhO-fIGO2fYX0E",
  authDomain: "miltoncourses.firebaseapp.com",
  databaseURL: "https://miltoncourses.firebaseio.com",
  projectId: "miltoncourses",
  storageBucket: "miltoncourses.appspot.com",
  messagingSenderId: "763338172558"
});

const db = firebase.database()

function addReview(data){
  const ref = db.ref('courses/'+data.course+'/reviews')
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      console.log('hello')
      ref.child('0').set(data.review)
    }
    else{
      ref.child(snapshot.val().length).set(data.review)
    }
  })
}

function getCourses(callback) {
  const ref = db.ref('courses')
  ref.once('value').then(function(snapshot) {
    callback(snapshot.val())
  })
}

function getCourse(cid, callback) {
  const ref = db.ref('courses/' + cid)
  ref.once('value').then(function(snapshot) {
    callback(snapshot.val())
  })
}

function updateRating(rating, course){
  const ref = db.ref('courses/' + course)
  ref.once('value').then(function(snapshot){
    if(snapshot.val().length == 0){
      updates['/' + rating] = data.id;
      ref.update(updates)
    }
  })
}

$(() => {
  // Set up sidebar
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });

  // Set up courses
  getCourses((courses) => {
    for (let cid in courses) {
      const subjectElement = $(`#${courses[cid].subject}`);
      const courseElement = $(`<li><a class="class-link" href="#${cid}">` + courses[cid].name + '</a></li>')
      subjectElement.append(courseElement)
    }

    $('.class-link').click((e) => {
      const cid = e.target.href.substring(e.target.href.lastIndexOf('#') + 1);
      getCourse(cid, (course) => {
        console.log(course.description)
      })
    })
  });

  $('#hi').click(() => {
    alert("You have submitted your response!")
  })

})
