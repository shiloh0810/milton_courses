firebase.initializeApp({
  apiKey: "AIzaSyBiX9yJ4DoRd8hTGdGkbDhO-fIGO2fYX0E",
  authDomain: "miltoncourses.firebaseapp.com",
  databaseURL: "https://miltoncourses.firebaseio.com",
  projectId: "miltoncourses",
  storageBucket: "miltoncourses.appspot.com",
  messagingSenderId: "763338172558"
});

const db = firebase.database()

function addSubjectCourse(data){
  const ref = db.ref('subjects/'+data.subject)
  ref.once('value').then(function(snapshot){
    if(snapshot.val == null){
      ref.child(data.course).set(data.id)
    }
    else{
      const updates = {}
      updates['/' + data.course] = data.id;
      ref.update(updates)
    }
  })
}

function sayHello() {
  const ref = db.ref('courses/math')
  ref.set({rating:5, teacher:'emmott', credits:1})
}

function getHello(){
  const ref = db.ref('courses/us-history')
  ref.once('value').then(function(snapshot){
    console.log(snapshot.val())
  })
}

function addsubject(courses){
  const ref = db.ref("subjects/"+courses.subject)
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

$(() => {
  // Set up sidebar
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });

  getCourses((jsonPackage) => {
    for (var subjectData in jsonPackage) {
      var subjectElement = $("#" + subjectData);
      for (classK in subjectData) {
        subjectElement.append('<li><a href="#">' + classK + '</a></li>');
      }
    }
  });
})
