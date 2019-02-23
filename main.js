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

function addCourse(data){
  const ref = db.ref('courses')
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      ref.child(data.course).child('info').set({rating:data.rating, teacher:data.teacher, credit:data.credit, info:data.info})
      console.log("Bye")
    }
    else{
      const updates = {}
      updates['/' + data.course + '/info'] = {rating:data.rating, teacher:data.teacher, credit:data.credit, infos:data.info}
      ref.update(updates)
      console.log("Bye2")
    }
  })
}

addSubjectCourse({subject:'math', course:'precalc', id:'MPR3'});
addSubjectCourse({subject:'math', course:'calc', id:'CLC2'});
addSubjectCourse({subject:'math', course:'group', id:'asdf'});
addSubjectCourse({subject:'english', course:'performing', id:'adfad'});
addSubjectCourse({subject:'english', course:'reading consciousness', id:'addf'});
addSubjectCourse({subject:'english', course:'human condition', id:'asadfdf'});
addSubjectCourse({subject:'science', course:'physics', id:'MPR3'});
addSubjectCourse({subject:'science', course:'biology', id:'CLC2'});
addSubjectCourse({subject:'science', course:'chemistry', id:'asdf'});
addSubjectCourse({subject:'history', course:'ancient civilizations', id:'MPR3'});
addSubjectCourse({subject:'history', course:'us history', id:'CLC2'});
addSubjectCourse({subject:'history', course:'us in the modern world', id:'asdf'});
addSubjectCourse({subject:'arts', course:'drawing', id:'MPR3'});
addSubjectCourse({subject:'arts', course:'sculpture', id:'CLC2'});
addSubjectCourse({subject:'arts', course:'photography', id:'asdf'});

addCourse({course:'Algebra 1 with Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Algebra 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Precalculus(Foundation)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus and Applied Economics (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Calculus(Accelerated)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Stats (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Stats (Regular)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Statistical Methods (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Calculus and Mathematical Statistics Methods (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Multivariable Calculus', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Abstract Algebra and Group Theory', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Advanced Topics in Mathematics', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Discrete Mathematics Seminar', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Mathematics and Art', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 1', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 2', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 2&3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Computer Programming 3', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Computer Programming 4', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'Applied Engineering & Design', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'French 1', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 1P', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 2', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 2 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 3', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 3 (Honors)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 4', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 4 (AP)', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 5 (Honors): A Further Exploration of Literature', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'French 5 (Honors): The Francophone World', rating:null, teacher:'N/A', credit:0.5, info:'-'})
addCourse({course:'precalc', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'calc', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'group', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'performing', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'reading consciousness', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'human condition', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'physics', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'biology', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'chemistry', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'ancient civilizations', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'us history', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'us in the modern world', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'drawing', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'sculpture', rating:5, teacher:'precalc', credit:1, info:'testinfo'})
addCourse({course:'photography', rating:5, teacher:'precalc', credit:1, info:'testinfo'})

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

addReview({course:'human condition', review:'very good'})

//add callback here
function getCourses(){
  const ref = db.ref('subjects')
  ref.once('value').then(function(snapshot){
    for (var key in snapshot.val()) {
      console.log(snapshot.val()[key])
    }
    //Scallback(snapshot.val())
  })
}
getCourses();
function updateRating(rating, course){
  const ref = db.ref('courses/'+course)
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

  getCourses((jsonPackage) => {
    for (var subjectData in jsonPackage) {
      var subjectElement = $("#" + subjectData);
      for (classK in subjectData) {
        subjectElement.append('<li><a href="#">' + classK + '</a></li>');
      }
    }
  });
})
