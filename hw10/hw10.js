/*let bus = true;
let didWork;
let iceCream;

function wakeUp(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout > 1000) {
                console.log('OMG you should be faster');
                reject('you can stay home');
            } else {
                console.log('Hurry up!');
                resolve(bus);
            }
        }, timeout);
    });
}

function takeShower(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus) {
                console.log('You don`t have much time');
                resolve(bus);
            } else {
                console.log('Relax!');
                reject('You stay at home!');
            }
        }, timeout);
    });
}

function haveBreakfast(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus && timeout < 500) {
                console.log('OK');
                resolve(bus);
            } else if (bus && timeout > 500) {
                console.log('Relax! You are late');
                reject('You stay home');
            } else {
                console.log('Relax');
                reject('You stay home');
            }
        }, timeout);
    });
}

function takeChildToTheKindergarten(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus && timeout > 700) {
                console.log('You are late!!!');
                reject('You stay home');
            } else if (bus && timeout < 700) {
                console.log('Go go go!!');
                resolve();
            }
        }, timeout);
    });
}

function finallyInTheBus(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Go to work!!!');
            resolve();
        });
    }, timeout);
}

function goWork(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout > 1000) {
                console.log('You don`t have time for lunch!');
                resolve(didWork = false);
            } else {
                console.log('Good job!');
                resolve();
            }
        }, timeout);
    });
}

function haveLunch(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didWork) {
                reject('You don`t have time for lunch!');
            } else {
                console.log('Yammy!');
                resolve();
            }
        }, timeout);
    });
}

function goHome(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good job!');
            resolve();
        }, timeout);
    });
}

function pickUpChild(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout < 600) {
                console.log('We have time for iceCream!!!');
                resolve(iceCream);
            } else {
                console.log('Today without iceCream');
                resolve();
            }
        }, timeout);
    });
}

function familyTime(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Enjoy!!!');
            resolve();
        }, timeout);
    });
}*/

/*
wakeUp(100)
    .then(() => {
        return takeShower(500);
    })
    .then(() => {
        return haveBreakfast(400);
    })
    .then(() => {
        return takeChildToTheKindergarten(500);
    })
    .then(() => {
        return finallyInTheBus(500);
    })
    .then(() => {
        return goWork(1000);
    })
    .then(() => {
        return haveLunch(900);
    })
    .then(() => {
        return goHome(600);
    })
    .then(() => {
        return pickUpChild(700);
    })
    .then(() => {
        familyTime(2000);
    });*/
// .finally(() => {
//     console.log('It was great day!');
// });

/*
async function oneOfMyDays() {
    try {
        const morning = await (wakeUp(500));
        await (takeShower(700));
        await (haveBreakfast(400));
        await (takeChildToTheKindergarten(500));
        await (finallyInTheBus(200));
        await (goWork(900));
        await (goHome(500));
        await (pickUpChild(500));
        await (familyTime(500));
    } catch (e) {
        console.error(e);
    }
}

oneOfMyDays();*/

function wakeUp(timeout, cb) {
    setTimeout(() => {
        console.log('Good morning!');
        cb();
    }, timeout);
}

function takeShower(timeout, cb) {
    setTimeout(() => {
        console.log('Prepare for the day!');
        cb();
    }, timeout);
}

function haveBreakfast(timeout, cb) {
    setTimeout(() => {
        console.log('Delicious!');
        cb();
    }, timeout);
}

function takeChildToTheKindergarten(timeout, cb) {
    setTimeout(() => {
        console.log('Hurry up my sweet!');
        cb();
    }, timeout);

}

function goWork(timeout, cb) {
    setTimeout(() => {
        console.log('Finally!');
        cb();
    }, timeout);

}

function haveLunch(timeout, cb) {
    setTimeout(() => {
        console.log('Yammy');
        cb();
    }, timeout);

}

function goHome(timeout, cb) {
    setTimeout(() => {
        console.log('Good job!');
        cb();
    }, timeout);

}

function pickUpChild(timeout, cb) {
    setTimeout(() => {
        console.log('Hello my sweet!!!');
        cb();
    }, timeout);

}

function familyTime(timeout) {
    setTimeout(() => {
        console.log('Enjoy!!!');
    }, timeout);

}

wakeUp(100, () => {
    takeShower(220, () => {
        haveBreakfast(400, () => {
            takeChildToTheKindergarten(200, () => {
                goWork(100, () => {
                    haveLunch(200, () => {
                        goHome(300, () => {
                            pickUpChild(100, () => {
                                familyTime(700);
                            });
                        });
                    });
                });
            });
        });
    });
})