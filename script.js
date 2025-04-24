const searchBtn = document.getElementById("searchBtn");

const handleSearch = (e) => {
  e.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim();

  if (keyword !== "") {
    gtag("event", "search", {
      event_category: "engagement",
      event_label: keyword,
      search_term: keyword,
    });
    alert(`검색어${keyword}에 대한 검색을 실행했습니다`);
  } else {
    alert("검색어를 입력해주세요!");
  }
};

searchBtn.addEventListener("click", handleSearch);
