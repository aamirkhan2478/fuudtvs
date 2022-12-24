import {
  SHOW_CHEMISTRY_DEPARTMENT_COUNT,
  SHOW_CHEMISTRY_DEPARTMENT_COUNT_ERROR,
  SHOW_COMMERCE_DEPARTMENT_COUNT,
  SHOW_COMMERCE_DEPARTMENT_COUNT_ERROR,
  SHOW_LAW_DEPARTMENT_COUNT,
  SHOW_LAW_DEPARTMENT_COUNT_ERROR,
  SHOW_ISLAMIAT_DEPARTMENT_COUNT,
  SHOW_ISLAMIAT_DEPARTMENT_COUNT_ERROR,
  SHOW_PHYSICS_DEPARTMENT_COUNT,
  SHOW_PHYSICS_DEPARTMENT_COUNT_ERROR,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT_ERROR,
  SHOW_CS_DEPARTMENT_COUNT,
  SHOW_CS_DEPARTMENT_COUNT_ERROR,
  SHOW_BUSINESS_DEPARTMENT_COUNT,
  SHOW_BUSINESS_DEPARTMENT_COUNT_ERROR,
  SHOW_ECONOMICS_DEPARTMENT_COUNT,
  SHOW_ECONOMICS_DEPARTMENT_COUNT_ERROR,
  SHOW_ELECTRICAL_DEPARTMENT_COUNT,
  SHOW_ELECTRICAL_DEPARTMENT_COUNT_ERROR,
  SHOW_ENGLISH_DEPARTMENT_COUNT,
  SHOW_ENGLISH_DEPARTMENT_COUNT_ERROR,
  SHOW_MECHANICAL_DEPARTMENT_COUNT,
  SHOW_MECHANICAL_DEPARTMENT_COUNT_ERROR,
  SHOW_MATHEMATICS_DEPARTMENT_COUNT,
  SHOW_MATHEMATICS_DEPARTMENT_COUNT_ERROR,
  SHOW_URDU_DEPARTMENT_COUNT,
  SHOW_URDU_DEPARTMENT_COUNT_ERROR,
  SHOW_SOFTWARE_DEPARTMENT_COUNT,
  SHOW_SOFTWARE_DEPARTMENT_COUNT_ERROR,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT_ERROR,
  SHOW_FEE_SECTION_COUNT,
  SHOW_FEE_SECTION_COUNT_ERROR,
  SHOW_LIBRARY_COUNT,
  SHOW_LIBRARY_COUNT_ERROR,
  SHOW_INCHARGE_CAMPUS_COUNT,
  SHOW_INCHARGE_CAMPUS_COUNT_ERROR,
  SHOW_EXAMINATION_DEPARTMENT_COUNT,
  SHOW_EXAMINATION_DEPARTMENT_COUNT_ERROR,
  COUNT_LOADING,
} from "../Actions/types";

const initialState = {
  count_loading: false,
  chemistry_count: "",
  commerce_count: "",
  law_count: "",
  islamiat_count: "",
  physics_count: "",
  applied_physics_count: "",
  cs_count: "",
  business_count: "",
  economics_count: "",
  electrical_count: "",
  english_count: "",
  mechanical_count: "",
  mathematics_count: "",
  urdu_count: "",
  software_count: "",
  international_relations_count: "",
  fee_section_count: "",
  library_count: "",
  incharge_campus_count: "",
  examination_count: "",
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COUNT_LOADING:
      return {
        ...state,
        count_loading: true,
      };

    case SHOW_CHEMISTRY_DEPARTMENT_COUNT:
      return {
        ...state,
        chemistry_count: payload,
        count_loading: false,
      };

    case SHOW_COMMERCE_DEPARTMENT_COUNT:
      return {
        ...state,
        commerce_count: payload,
        count_loading: false,
      };

    case SHOW_LAW_DEPARTMENT_COUNT:
      return {
        ...state,
        law_count: payload,
        count_loading: false,
      };

    case SHOW_ISLAMIAT_DEPARTMENT_COUNT:
      return {
        ...state,
        islamiat_count: payload,
        count_loading: false,
      };

    case SHOW_PHYSICS_DEPARTMENT_COUNT:
      return {
        ...state,
        physics_count: payload,
        count_loading: false,
      };

    case SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT:
      return {
        ...state,
        applied_physics_count: payload,
        count_loading: false,
      };

    case SHOW_CS_DEPARTMENT_COUNT:
      return {
        ...state,
        cs_count: payload,
        count_loading: false,
      };

    case SHOW_BUSINESS_DEPARTMENT_COUNT:
      return {
        ...state,
        business_count: payload,
        count_loading: false,
      };

    case SHOW_ECONOMICS_DEPARTMENT_COUNT:
      return {
        ...state,
        economics_count: payload,
        count_loading: false,
      };

    case SHOW_ELECTRICAL_DEPARTMENT_COUNT:
      return {
        ...state,
        electrical_count: payload,
        count_loading: false,
      };

    case SHOW_ENGLISH_DEPARTMENT_COUNT:
      return {
        ...state,
        english_count: payload,
        count_loading: false,
      };

    case SHOW_MECHANICAL_DEPARTMENT_COUNT:
      return {
        ...state,
        mechanical_count: payload,
        count_loading: false,
      };

    case SHOW_MATHEMATICS_DEPARTMENT_COUNT:
      return {
        ...state,
        mathematics_count: payload,
        count_loading: false,
      };

    case SHOW_URDU_DEPARTMENT_COUNT:
      return {
        ...state,
        urdu_count: payload,
        count_loading: false,
      };

    case SHOW_SOFTWARE_DEPARTMENT_COUNT:
      return {
        ...state,
        software_count: payload,
        count_loading: false,
      };

    case SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT:
      return {
        ...state,
        international_relations_count: payload,
        count_loading: false,
      };

    case SHOW_FEE_SECTION_COUNT:
      return {
        ...state,
        fee_section_count: payload,
        count_loading: false,
      };

    case SHOW_LIBRARY_COUNT:
      return {
        ...state,
        library_count: payload,
        count_loading: false,
      };

    case SHOW_INCHARGE_CAMPUS_COUNT:
      return {
        ...state,
        incharge_campus_count: payload,
        count_loading: false,
      };

    case SHOW_EXAMINATION_DEPARTMENT_COUNT:
      return {
        ...state,
        examination_count: payload,
        count_loading: false,
      };

    case SHOW_CHEMISTRY_DEPARTMENT_COUNT_ERROR:
    case SHOW_COMMERCE_DEPARTMENT_COUNT_ERROR:
    case SHOW_ISLAMIAT_DEPARTMENT_COUNT_ERROR:
    case SHOW_LAW_DEPARTMENT_COUNT_ERROR:
    case SHOW_CS_DEPARTMENT_COUNT_ERROR:
    case SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT_ERROR:
    case SHOW_PHYSICS_DEPARTMENT_COUNT_ERROR:
    case SHOW_BUSINESS_DEPARTMENT_COUNT_ERROR:
    case SHOW_ECONOMICS_DEPARTMENT_COUNT_ERROR:
    case SHOW_ELECTRICAL_DEPARTMENT_COUNT_ERROR:
    case SHOW_ENGLISH_DEPARTMENT_COUNT_ERROR:
    case SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT_ERROR:
    case SHOW_MATHEMATICS_DEPARTMENT_COUNT_ERROR:
    case SHOW_MECHANICAL_DEPARTMENT_COUNT_ERROR:
    case SHOW_URDU_DEPARTMENT_COUNT_ERROR:
    case SHOW_SOFTWARE_DEPARTMENT_COUNT_ERROR:
    case SHOW_FEE_SECTION_COUNT_ERROR:
    case SHOW_LIBRARY_COUNT_ERROR:
    case SHOW_INCHARGE_CAMPUS_COUNT_ERROR:
    case SHOW_EXAMINATION_DEPARTMENT_COUNT_ERROR:
      return {
        ...state,
        count_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
