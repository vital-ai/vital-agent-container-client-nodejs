import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint
 */
export class HaleyAnswerConstraint extends VITAL_Node {
  public integerRangeIncrease?: number;
  public haleyAnswerConstraintType?: string;
  public longTextAnswerValue?: string;
  public haleyAnswerConstantURI?: string;
  public multiTaxonomyAnswerValue?: string[];
  public doubleAnswerValue?: number;
  public signatureAnswerValue?: string;
  public haleyCurrencyType?: string;
  public booleanAnswerValue?: boolean;
  public dateRangeIncrease?: number;
  public integerRangeDecrease?: number;
  public haleyAnswerUnitType?: string;
  public lowerBoundDoubleValue?: number;
  public upperBoundDateValue?: string | Date;
  public integerAnswerValue?: number;
  public lowerBoundCurrencyValue?: number;
  public choiceAnswerValue?: string;
  public haleyAnswerDataType?: string;
  public doubleRangeDecrease?: number;
  public lowerBoundDateValue?: string | Date;
  public doubleRangeIncrease?: number;
  public upperBoundCurrencyValue?: number;
  public haleyAnswerConstraintComparatorURI?: string;
  public upperBoundDoubleValue?: number;
  public haleyAnswerConstraintRelationshipURI?: string;
  public fileAnswerValueURI?: string;
  public upperBoundIntegerValue?: number;
  public dateTimeAnswerValue?: string | Date;
  public multiChoiceAnswerValue?: string[];
  public dateRangeDecrease?: number;
  public haleyAnswerTypeComparison?: string;
  public haleyAnswerComparison?: string;
  public taxonomyAnswerValue?: string;
  public lowerBoundIntegerValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint';
  }

  /**
   * Get property definitions for HaleyAnswerConstraint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerRangeIncrease',
        tsPropertyName: 'integerRangeIncrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintType',
        tsPropertyName: 'haleyAnswerConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI',
        tsPropertyName: 'haleyAnswerConstantURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue',
        tsPropertyName: 'multiTaxonomyAnswerValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue',
        tsPropertyName: 'doubleAnswerValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue',
        tsPropertyName: 'signatureAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue',
        tsPropertyName: 'booleanAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateRangeIncrease',
        tsPropertyName: 'dateRangeIncrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerRangeDecrease',
        tsPropertyName: 'integerRangeDecrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType',
        tsPropertyName: 'haleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundDoubleValue',
        tsPropertyName: 'lowerBoundDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundDateValue',
        tsPropertyName: 'upperBoundDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue',
        tsPropertyName: 'integerAnswerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundCurrencyValue',
        tsPropertyName: 'lowerBoundCurrencyValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue',
        tsPropertyName: 'choiceAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType',
        tsPropertyName: 'haleyAnswerDataType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleRangeDecrease',
        tsPropertyName: 'doubleRangeDecrease',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundDateValue',
        tsPropertyName: 'lowerBoundDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleRangeIncrease',
        tsPropertyName: 'doubleRangeIncrease',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundCurrencyValue',
        tsPropertyName: 'upperBoundCurrencyValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI',
        tsPropertyName: 'haleyAnswerConstraintComparatorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundDoubleValue',
        tsPropertyName: 'upperBoundDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintRelationshipURI',
        tsPropertyName: 'haleyAnswerConstraintRelationshipURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundIntegerValue',
        tsPropertyName: 'upperBoundIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue',
        tsPropertyName: 'dateTimeAnswerValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue',
        tsPropertyName: 'multiChoiceAnswerValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateRangeDecrease',
        tsPropertyName: 'dateRangeDecrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeComparison',
        tsPropertyName: 'haleyAnswerTypeComparison',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerComparison',
        tsPropertyName: 'haleyAnswerComparison',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue',
        tsPropertyName: 'taxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundIntegerValue',
        tsPropertyName: 'lowerBoundIntegerValue',
        type: 'number',
        required: false
      }
    ];
  }


}
