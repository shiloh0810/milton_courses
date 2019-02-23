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

function deleteCourse(subject, course){
  const ref = db.ref('subject/'+subject)
  const updates = {}
  updates['/' + course] = null;
  ref.update(updates)
}

function deletecourse(course){
  const ref = db.ref('subjects')
  const updates = {}
  updates['/' + course] = null;
  ref.update(updates)
}

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
addSubjectCourse({subject:'math', course:'calc', id:'CLC'});









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
      ref.child(courses.id).set({id:courses.rating, counter:1})
    }
    else{
      const currentcounter = snapshot.val().counter
    }
  })
}
