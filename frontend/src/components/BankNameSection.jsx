import React, { useContext } from "react";
import { BankContext } from "../contexts/BankContext";

const BankNameSection = ({
  handleBankSearch,
  handleBankSelect,
  handleKeyDown,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseMove,
  getItemClassName,
}) => {
  const { selectedBank, filteredBanks, activeDropdown, setActiveDropdown, bankSearchTerm, formRef, inputWidth } = useContext(BankContext);

  const handleInputChange = (e) => {
    handleBankSearch(e.target.value);
  };

  const handleInputClick = () => {
    setActiveDropdown("bank");
  };

  return (
    <section className="w-full bank-input-field">
      <h2 className="mb-2 text-xl font-semibold">銀行名稱</h2>
      <div className="relative w-full">
        <input
          ref={formRef}
          type="text"
          id="bank-selection"
          name="bank"
          className={`w-full p-2 pr-10 border rounded-md ${
            activeDropdown === "bank" ? "border-blue-500 border-2" : "border-gray-300"
          } focus:outline-none`}
          placeholder="請輸入關鍵字或銀行代碼"
          value={bankSearchTerm}
          onChange={handleInputChange}
          onClick={() => setActiveDropdown(activeDropdown === "bank" ? null : "bank")}
          onKeyDown={handleKeyDown}
        />
        <button
          className={`absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer ${
            activeDropdown === "bank" ? "text-black-500" : "text-gray-400"
          }`}
          onClick={handleInputClick}
        >
          <div className="w-px h-6 mr-2 bg-gray-300"></div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {activeDropdown === "bank" && (
        <ul
          className="bank-dropdown absolute z-10 w-full mt-1 overflow-y-auto bg-white border rounded-md shadow-lg max-h-60"
          style={{ width: inputWidth, maxHeight: "290px" }}
          onKeyDown={handleKeyDown}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank, index) => {
              const isSelected = selectedBank === `${bank.code} ${bank.name}`;

              return (
                <li
                  key={bank.code}
                  className={`p-2 cursor-pointer ${isSelected ? "bg-blue-500 text-white" : getItemClassName(index) ? "bg-gray-300" : ""}`}
                  onClick={() => handleBankSelect(bank)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  {bank.code} {bank.name}
                </li>
              );
            })
          ) : (
            <li className="p-2 text-center text-gray-500">無相關資料</li>
          )}
        </ul>
      )}
      <p className="mt-1 text-left">可使用下拉選單或直接輸入關鍵字查詢</p>
    </section>
  );
};

export default BankNameSection;