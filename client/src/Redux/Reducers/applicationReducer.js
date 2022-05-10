import {
  SHOW_CHEMISTRY_DEPARTMENT,
  SHOW_CHEMISTRY_DEPARTMENT_ERROR,
  SHOW_COMMERCE_DEPARTMENT,
  SHOW_COMMERCE_DEPARTMENT_ERROR,
  SHOW_LAW_DEPARTMENT,
  SHOW_LAW_DEPARTMENT_ERROR,
  SHOW_ISLAMIAT_DEPARTMENT,
  SHOW_ISLAMIAT_DEPARTMENT_ERROR,
  SHOW_PHYSICS_DEPARTMENT,
  SHOW_PHYSICS_DEPARTMENT_ERROR,
  SHOW_APPLIED_PHYSICS_DEPARTMENT,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR,
  SHOW_CS_DEPARTMENT,
  SHOW_CS_DEPARTMENT_ERROR,
  SHOW_BUSINESS_DEPARTMENT,
  SHOW_BUSINESS_DEPARTMENT_ERROR,
  SHOW_ECONOMICS_DEPARTMENT,
  SHOW_ECONOMICS_DEPARTMENT_ERROR,
  SHOW_ELECTRICAL_DEPARTMENT,
  SHOW_ELECTRICAL_DEPARTMENT_ERROR,
  SHOW_ENGLISH_DEPARTMENT,
  SHOW_ENGLISH_DEPARTMENT_ERROR,
  SHOW_MECHANICAL_DEPARTMENT,
  SHOW_MECHANICAL_DEPARTMENT_ERROR,
  SHOW_MATHEMATICS_DEPARTMENT,
  SHOW_MATHEMATICS_DEPARTMENT_ERROR,
  SHOW_URDU_DEPARTMENT,
  SHOW_URDU_DEPARTMENT_ERROR,
  SHOW_SOFTWARE_DEPARTMENT,
  SHOW_SOFTWARE_DEPARTMENT_ERROR,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR,
  SHOW_FEE_SECTION,
  SHOW_FEE_SECTION_ERROR,
  SHOW_LIBRARY,
  SHOW_LIBRARY_ERROR,
  SHOW_INCHARGE_CAMPUS,
  SHOW_INCHARGE_CAMPUS_ERROR,
  SHOW_EXAMINATION_DEPARTMENT,
  SHOW_EXAMINATION_DEPARTMENT_ERROR,
  APPLICATION_LOADING,
} from "../Actions/types";

const initialState = {
  application_loading: false,
  chemistry_applications: [],
  commerce_applications: [],
  law_applications: [],
  islamiat_applications: [],
  physics_applications: [],
  applied_physics_applications: [],
  cs_applications: [],
  business_applications: [],
  economics_applications: [],
  electrical_applications: [],
  english_applications: [],
  mechanical_applications: [],
  mathematics_applications: [],
  urdu_applications: [],
  software_applications: [],
  international_relations_applications: [],
  fee_section_applications: [],
  library_applications: [],
  incharge_campus_applications: [],
  examination_applications: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPLICATION_LOADING:
      return {
        ...state,
        application_loading: true,
      };

    case SHOW_CHEMISTRY_DEPARTMENT:
      return {
        ...state,
        chemistry_applications: payload,
        application_loading: false,
      };

    case SHOW_COMMERCE_DEPARTMENT:
      return {
        ...state,
        commerce_applications: payload,
        application_loading: false,
      };

    case SHOW_LAW_DEPARTMENT:
      return {
        ...state,
        law_applications: payload,
        application_loading: false,
      };

    case SHOW_ISLAMIAT_DEPARTMENT:
      return {
        ...state,
        islamiat_applications: payload,
        application_loading: false,
      };

    case SHOW_PHYSICS_DEPARTMENT:
      return {
        ...state,
        physics_applications: payload,
        application_loading: false,
      };

    case SHOW_APPLIED_PHYSICS_DEPARTMENT:
      return {
        ...state,
        applied_physics_applications: payload,
        application_loading: false,
      };

    case SHOW_CS_DEPARTMENT:
      return {
        ...state,
        cs_applications: payload,
        application_loading: false,
      };

    case SHOW_BUSINESS_DEPARTMENT:
      return {
        ...state,
        business_applications: payload,
        application_loading: false,
      };

    case SHOW_ECONOMICS_DEPARTMENT:
      return {
        ...state,
        economics_applications: payload,
        application_loading: false,
      };

    case SHOW_ELECTRICAL_DEPARTMENT:
      return {
        ...state,
        electrical_applications: payload,
        application_loading: false,
      };

    case SHOW_ENGLISH_DEPARTMENT:
      return {
        ...state,
        english_applications: payload,
        application_loading: false,
      };

    case SHOW_MECHANICAL_DEPARTMENT:
      return {
        ...state,
        mechanical_applications: payload,
        application_loading: false,
      };

    case SHOW_MATHEMATICS_DEPARTMENT:
      return {
        ...state,
        mathematics_applications: payload,
        application_loading: false,
      };

    case SHOW_URDU_DEPARTMENT:
      return {
        ...state,
        urdu_applications: payload,
        application_loading: false,
      };

    case SHOW_SOFTWARE_DEPARTMENT:
      return {
        ...state,
        software_applications: payload,
        application_loading: false,
      };

    case SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT:
      return {
        ...state,
        international_relations_applications: payload,
        application_loading: false,
      };

    case SHOW_FEE_SECTION:
      return {
        ...state,
        fee_section_applications: payload,
        application_loading: false,
      };

    case SHOW_LIBRARY:
      return {
        ...state,
        library_applications: payload,
        application_loading: false,
      };

    case SHOW_INCHARGE_CAMPUS:
      return {
        ...state,
        incharge_campus_applications: payload,
        application_loading: false,
      };

    case SHOW_EXAMINATION_DEPARTMENT:
      return {
        ...state,
        examination_applications: payload,
        application_loading: false,
      };

    case SHOW_CHEMISTRY_DEPARTMENT_ERROR:
    case SHOW_COMMERCE_DEPARTMENT_ERROR:
    case SHOW_ISLAMIAT_DEPARTMENT_ERROR:
    case SHOW_LAW_DEPARTMENT_ERROR:
    case SHOW_CS_DEPARTMENT_ERROR:
    case SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR:
    case SHOW_PHYSICS_DEPARTMENT_ERROR:
    case SHOW_BUSINESS_DEPARTMENT_ERROR:
    case SHOW_ECONOMICS_DEPARTMENT_ERROR:
    case SHOW_ELECTRICAL_DEPARTMENT_ERROR:
    case SHOW_ENGLISH_DEPARTMENT_ERROR:
    case SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR:
    case SHOW_MATHEMATICS_DEPARTMENT_ERROR:
    case SHOW_MECHANICAL_DEPARTMENT_ERROR:
    case SHOW_URDU_DEPARTMENT_ERROR:
    case SHOW_SOFTWARE_DEPARTMENT_ERROR:
    case SHOW_FEE_SECTION_ERROR:
    case SHOW_LIBRARY_ERROR:
    case SHOW_INCHARGE_CAMPUS_ERROR:
    case SHOW_EXAMINATION_DEPARTMENT_ERROR:
      return {
        ...state,
        application_loading: false,
        chemistry_applications: [],
        commerce_applications: [],
        law_applications: [],
        islamiat_applications: [],
        physics_applications: [],
        applied_physics_applications: [],
        cs_applications: [],
        business_applications: [],
        economics_applications: [],
        electrical_applications: [],
        english_applications: [],
        mechanical_applications: [],
        mathematics_applications: [],
        urdu_applications: [],
        software_applications: [],
        international_relations_applications: [],
        fee_section_applications: [],
        library_applications: [],
        incharge_campus_applications: [],
        examination_applications: [],
      };

    default:
      return state;
  }
}
