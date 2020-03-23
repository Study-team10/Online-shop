import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import SvgArrow from "../../../public/static/icons/arrow-down.svg";
// import { Star } from "@components";

const Wraper = styled.div``;

const Select = styled.div`
  position: relative;
`;
const Box = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1000;
`;

const SelectBox = styled.div`
  width: 100%;
  height: 60px;
  margin: 0;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  opacity: 1;
  /* background: #f8f8f8; */
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  pointer-events: ${props => (props.disabled ? "none" : "")};
  cursor: pointer;
`;
const SelectBoxInput = styled.div`
  font-family: "Montserrat";
  letter-spacing: 0;
  color: #dbdbdb;
  font-size: 25px;
  font-weight: "SemiBold";
  text-align: left;
  opacity: 1;
  margin-left: 41px;
`;

const SelectArrow = styled.div`
  margin-right: 35px;
  /* border: none !important;
  background: none; */
  cursor: pointer;
`;
const ScrollBox = styled.div`
  width: 100%;
  /* height: 291px; */
  opacity: 1;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  padding-right: 31px;
`;
const SelectItemsBox = styled.div`
  width: 100%;
  max-height: 291px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: 41px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #dbdbdb 0% 0% no-repeat padding-box;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #3a414a;
    border-radius: 10px;
  }
`;

const SelectItemSingle = styled.div`
  font-family: "Montserrat";
  letter-spacing: 0;
  color: #dbdbdb;
  font-size: 25px;
  font-weight: "SemiBold";
  text-align: left;
  opacity: 1;
  height: 75px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #3a414a;
  }
`;

const SelectPlaceholder = styled.div`
  border-radius: 10px 10px 0px 0px;
  background-color: #dbdbdb;
  width: 100%;
  height: 75px;
  margin-top: 14px;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const PlaceholderText = styled.div`
  font-family: "Montserrat";
  letter-spacing: 0;
  color: #3a414a;
  font-size: 25px;
  font-weight: "SemiBold";
  text-align: left;
  margin-left: 41px;
  opacity: 1;
`;
const Input = styled.input`
  display: none;
  visibility: hidden;
`;

const SelectInput = ({
  value,
  name,
  label,
  id,
  options,
  handleChange,
  placeholder,
  required = false,
  disabled = false,
  ...other
}) => {
  const [state, setState] = useState({
    showItems: false,
    selectedItem: null
  });

  const inputRef = React.useRef();
  const dropDown = () => setState({ ...state, showItems: !state.showItems });
  const selectItem = item =>
    setState({ ...state, selectedItem: item, showItems: false });

  useEffect(() => {
    if (inputRef.current) {
      let nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
      nativeInputValueSetter.call(inputRef.current, state.selectedItem.value);
      let event = new Event("change", { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }
  }, [state.selectedItem]);
  return (
    <Select
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
      options={options}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      label={label}
      {...other}
    >
      <Wraper
        tabIndex="0"
        onBlur={() => setState({ ...state, showItems: false })}
      >
        <SelectBox onClick={dropDown} disabled={disabled}>
          {/* <Star /> */}
          <SelectBoxInput
            style={{ color: state.selectedItem ? "#3a414a" : "#dbdbdb" }}
          >
            {state.selectedItem ? state.selectedItem.value : placeholder}
          </SelectBoxInput>
          <SelectArrow>
            {/* <SvgArrow
              width={"27px"}
              height={"17px"}
              fill={state.selectedItem ? "#3a414a" : "#dbdbdb"}
            /> */}
          </SelectArrow>
        </SelectBox>
        {options && (
          <Box style={{ display: state.showItems ? "block" : "none" }}>
            <SelectPlaceholder>
              <PlaceholderText>{placeholder}</PlaceholderText>
            </SelectPlaceholder>
            <ScrollBox>
              {options && (
                <SelectItemsBox>
                  {options.map(item => (
                    <SelectItemSingle
                      value={item.value}
                      key={item.id}
                      onClick={() => selectItem(item)}
                    >
                      {item.value}
                    </SelectItemSingle>
                  ))}
                </SelectItemsBox>
              )}
            </ScrollBox>
          </Box>
        )}
        {state.selectedItem && (
          <Input
            ref={inputRef}
            value={state.valueitem}
            name={name}
            onChange={handleChange}
            {...other}
          />
        )}
      </Wraper>
    </Select>
  );
};

SelectInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  other: PropTypes.any
};
export default SelectInput;
