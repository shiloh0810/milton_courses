var config = {
  apiKey: "AIzaSyBiX9yJ4DoRd8hTGdGkbDhO-fIGO2fYX0E",
  authDomain: "miltoncourses.firebaseapp.com",
  databaseURL: "https://miltoncourses.firebaseio.com",
  projectId: "miltoncourses",
  storageBucket: "miltoncourses.appspot.com",
  messagingSenderId: "763338172558"
};

firebase.initializeApp(config);
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


function addCourse(data){
  const ref = db.ref('courses')
  ref.once('value').then(function(snapshot){
    if(snapshot.val() == null){
      ref.child(data.course).child('info').set({rating:data.rating, teacher:data.teacher, credit:data.credit, info:data.info})
    }
    else{
      const updates = {}
      updates['/' + data.course] = {rating:data.rating, teacher:data.teacher, credit:data.credit, infos:data.info}
      ref.update(updates)
    }
  })
}

addCourse({course:'Algebra 1 with Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Geometry', rating:null, teacher:'N/A', credit:1, info:'-'})
addCourse({course:'Algebra 2', rating:null, teacher:'N/A', credit:1, info:'-'})


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
