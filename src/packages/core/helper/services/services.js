import firebase from 'helper/firebaseConfig';

const db = firebase.database;
const studentServices = {
    getAllStudents: () => {
        return db.ref('/students').once('value');
    },
    addStudent: (student) => {
        return db.ref('/students').push(student);


    },
    updateStudent: (student) => {
        let { key, ...cloneStudent } = student;

        const curUpdate = db.ref('/students').child(student.key);
        curUpdate.set(cloneStudent);
    },
    deleteStudent: (key) => {
        db.ref('/students').child(key).remove();
    },
};

const beltServices = {
    getAllBelts: () => {
        return db.ref('/belts').once('value');
    },
    addBelt: (belt) => {
        return db.ref('/belts').push(belt);
    },
    updateBelt: (belt) => {
        let { key, ...cloneBelt } = belt;

        const curUpdate = db.ref('/belts').child(belt.key);
        curUpdate.set(cloneBelt);
    },
    deleteBelt: (key) => {
        db.ref('/belts').child(key).remove();
    },
};

const settingServices = {
    getFee: () => {
        return db.ref().child('feePerMonth').once('value');
    },

    updateFee: (fee) => {
        const curUpdate = db.ref().child('feePerMonth');
        return curUpdate.set(fee);
    }
}

export { studentServices, beltServices, settingServices };
