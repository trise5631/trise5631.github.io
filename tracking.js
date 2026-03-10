parse({"vessels": [], "label": "", "txt": "The search has concluded for now<br>\nSource: <a target=\"_blank\" href=\"https://oceaninfinity.com/news/conclusion-of-the-search-for-malaysian-airlines-flight-mh370/\" style=\"display:inline\">OI press release</a>", "startT": 1771992000, "colors": {}, "phases": [["SEABED CONSTRUCTOR P1", "sc1.js", 0, "SEABED CONSTRUCTOR Phase 1 2018/01/19-2018/02/08"], ["SEABED CONSTRUCTOR P2", "sc2.js", 0, "SEABED CONSTRUCTOR Phase 2 2018/02/11-2018/03/22"], ["SEABED CONSTRUCTOR P3", "sc3.js", 0, "SEABED CONSTRUCTOR Phase 3 2018/03/22-2018/05/01"], ["SEABED CONSTRUCTOR P4", "sc4.js", 0, "SEABED CONSTRUCTOR Phase 4 2018/05/02-2018/06/09"], ["ARMADA 78 06 P1", "phase1.js", 1, "ARMADA 78 06 Phase 1 2025/02/07-2025/03/04"], ["ARMADA 78 06 P2", "phase2.js", 1, "ARMADA 78 06 Phase 1 2025/03/06-2025/04/08"], ["TSYH", "TSYH.js", 0, "TAN SUO YI HAO 2025/04/03-2025/04/26"], ["ARMADA 86 05 P3", "phase3.js", 1, "ARMADA 86 05 Phase 3 2025/12/23-2026/01/28"]], "data": {}, "currTime": {}})
// setTimeout(function() {changeCB({"currentTarget":{"id":"cbphase1"}})},5000)
changeCB({"currentTarget":{"id":"cbphase1","checked":false}})
changeCB({"currentTarget":{"id":"cbphase2","checked":false}})
changeCB({"currentTarget":{"id":"cbphase3","checked":true}})
const header = document.querySelector('#unfold');
const wrapper = document.querySelector('#options');
header.addEventListener('click', () => {
	wrapper.classList.toggle('is-open');
});