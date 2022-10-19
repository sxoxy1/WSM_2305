//현재 구하자
let now = new Date();
//현재 년
let year = now.getFullYear();

//현재 월
let month = now.getMonth();  //0~11
month++;

const setCalender =(year,month)=>{
    //1일이 무슨 요일?
    let firstDate= new Date(year,month-1,1);
    let firsDay = firstDate.getDay();

    //말일은 며칠?
    let lastDate = new Date(year, month ,0).getDate();  //2022년 10월 0일 =2022년 9월 말일


    //제목 표시하자
    const setTitle =(year, month)=>{
        //console.log(`${year}년 ${month}월`)
        //let title_year =document.getElementById("title_year");
        title_year.innerHTML=year;     //니꼴라스 says
        //let title_montyh =document.getElementById("title_month");
        title_month.innerHTML=month;
    }
    setTitle(year,month);

    const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
    dateGridContainerDiv.innerHTML="";   //초기화
    //1~akfdlfRkwl gird-item 만들자
    for (let i=1; i<=lastDate;i++){
        //요소 만들자
        let newDiv =document.createElement("div");
        //class에 grid-itme 넣자
        newDiv.classList.add("grid-item");
        //text에 숫자 넣자
        newDiv.innerHTML=i;
        //부모에 newDiv 달자
        dateGridContainerDiv.appendChild(newDiv);
    }

    //1일에 해당하는 div를 grid-colum-start: 요일 +1;
    let firstDateDiv =dateGridContainerDiv.getElementsByClassName("grid-item")[0];
    firstDateDiv.style.gridColumnStart = firsDay+1;
}

setCalender(year,month);
//이전 달 달력 보이자
const prevMonth = ()=>{
    month--;
    //month가 0이면, month =12, year--;
    if(month==0){
        month=12;
        year--;
    }
    setCalender(year,month);
}

//다음 달 달력 보이자
const nextMonth =()=>{
    month++;
    //month가 13이면, month =1, year++;
    if(month==13){
        month=1;
        year++;
    }
    setCalender(year,month);
}

const initButton =() =>{
    //HTML->js
    //const prev_btn =document.getElementById("prev_btn");
    //const next_btn =document.getElementById("next_btn");
    
    //js event 달기
    //prev_btn.addEventListener("click", prevMonth);
    //next_btn.addEventListener("click", nextMonth);
    prev_btn.onclick =prevMonth;
    next_btn.onclick =nextMonth;
}
initButton();

//급식 API,AJAX 급식 데이터 가져오자
const KEY ="647f10f7da8f4fe0b91784fe21705d3c";
console.log(KEY);
const ATPT_OFCDC_SC_CODE="B10";  //서울 특별시 교육청
const SD_SCHUL_CODE="7010569";  //미림여자정보과학고등학교
const MLSV_YMD="20221019";  //2022년10월19일
const MMEAL_SC_CODE=3;  //중식
let url=`https://open.neis.go.kr/hub/mealServiceDietInfo`;
url += `?KEY=${KEY}`;
url += `&Type=json`;
url += `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`;
url += `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`;
url += `&MLSV_YMD=${MLSV_YMD}`;
url += `&MMEAL_SC_CODE=${MMEAL_SC_CODE}`;
console.log(url);

