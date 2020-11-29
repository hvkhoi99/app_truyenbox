import callApi from '../utils/apiCaller';


/*--------------get stories------------ */
export const getListStories = () => {
    return dispatch => {
        return callApi('stories', 'GET', null).then(res => {
            dispatch(actGetStories(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetStories = (stories) => {
    return {
        type: 'GET_STORIES',
        stories
    }
}

/*------------get chapter by storiesId -------------------  */

export const getChaptersByStoryId = (story_id) => {
    return dispatch => {
        return callApi(`story/${story_id}/chapters`, 'GET', null).then(res => {
            dispatch(actGetChapters(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetChapters = (chapters) => {
    return {
        type: 'GET_CHAPTERS',
        chapters
    }
}

/*-------------------get Stories by CateId---------------- */
export const getStoriesByCategoryId1 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId1(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId2 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId2(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId3 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId3(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId4 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId4(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId5 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId5(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId6 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId6(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId7 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId7(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId8 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId8(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}
export const getStoriesByCategoryId9 = (cate_id) => {
    return ditpatch => {
        return callApi(`story/category/${cate_id}`, 'GET', null).then(res => {
            ditpatch(actGetStoriesByCateId9(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    }
}

export const actGetStoriesByCateId1 = (storiesByCateId1) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID1',
        storiesByCateId1
    }
}
export const actGetStoriesByCateId2 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID2',
        storiesByCateId
    }
}
export const actGetStoriesByCateId3 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID3',
        storiesByCateId
    }
}
export const actGetStoriesByCateId4 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID4',
        storiesByCateId
    }
}
export const actGetStoriesByCateId5 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID5',
        storiesByCateId
    }
}
export const actGetStoriesByCateId6 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID6',
        storiesByCateId
    }
}
export const actGetStoriesByCateId7 = (storiesByCateId) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID7',
        storiesByCateId
    }
}
export const actGetStoriesByCateId8 = (storiesByCateId8) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID8',
        storiesByCateId8
    }
}
export const actGetStoriesByCateId9 = (storiesByCateId9) => {
    return {
        type: 'GET_STORIES_BY_CATEGORY_ID9',
        storiesByCateId9
    }
}

/*--------------get stories daily--------------- */

export const getStoriesDaily = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDaily(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const getStoriesDailySun = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailySun(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const getStoriesDailyFri = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailyFri(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}
export const getStoriesDailyThur = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailyThur(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}
export const getStoriesDailyTues = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailyTues(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}
export const getStoriesDailyWed = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailyWed(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const getStoriesDailySat = (day) => {
    return dispatch => {
        return callApi(`chapters/day/${day}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDailySat(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetStoriesDaily = (stories) => {
    return {
        type: 'GET_STORIES_DAILY',
        stories
    }
}

export const actGetStoriesDailyTues = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_TUES',
        stories
    }
}

export const actGetStoriesDailyWed = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_WED',
        stories
    }
}

export const actGetStoriesDailyThur = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_THUR',
        stories
    }
}

export const actGetStoriesDailyFri = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_FRI',
        stories
    }
}

export const actGetStoriesDailySun = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_SUN',
        stories
    }
}
export const actGetStoriesDailySat = (stories) => {
    return {
        type: 'GET_STORIES_DAILY_SAT',
        stories
    }
}


