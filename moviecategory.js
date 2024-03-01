// 0. 인기영화, 추천영화, 최신영화 쿼리 확인 (https://developer.themoviedb.org/reference/)
// 0.1.1 인기영화, 추천영화, 최신영화, 상영예정작은 URL주소 엔드값
// 0.1.2 인기영화 (https://api.themoviedb.org/3/movie/popular)
// 0.1.2 추천영화 (https://api.themoviedb.org/3/movie/top_rated)
// 0.1.3 최신영화 (https://api.themoviedb.org/3/movie/now_playing)
// 0.1.4 상영예정 (https://api.themoviedb.org/3/movie/upcoming)
// 유사코드 : 선옥님 검색어 호출 및 보여주기, 수영님 최신영화 호출 및 보여주기
// 선옥님 코드 본 후 수정 사항 : options 추가  

const menus = document.querySelectorAll(".menus button");
console.log("mmm", menus);

menus.forEach(menu => menu.addEventListener("click",(event) => getMoviesCategory(event)));

const getMoviesCategory = async (event) => {
    const category = event.target.id;
    console.log("category", category);
    let url;
    if (category === 'popular' || category === 'top_rated' || category === 'now_playing' || category === 'upcoming') {
        url = new URL(`https://api.themoviedb.org/3/movie/${category}`);
        url.searchParams.append('language', 'ko-KR');
    } else {
        console.error('Invalid category');
        return;
    }

    try {
        const response = await fetch(url,options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("category", data);
        movieList = data.results;
        render();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

