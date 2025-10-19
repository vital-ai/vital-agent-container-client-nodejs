import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency
 */
export class HaleyAnswerDependency extends VITAL_Node {
  public booleanAnswerValue?: boolean;
  public dateTimeAnswerValue?: string | Date;
  public choiceAnswerValue?: string;
  public longTextAnswerValue?: string;
  public multiChoiceAnswerValue?: string[];
  public fileAnswerValueURI?: string;
  public multiTaxonomyAnswerValue?: string[];
  public haleyAnswerConstraintComparatorURI?: string;
  public taxonomyAnswerValue?: string;
  public doubleAnswerValue?: number;
  public textAnswerValue?: string;
  public integerAnswerValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerDependency';
  }

  /**
   * Get property definitions for HaleyAnswerDependency
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue',
        tsPropertyName: 'booleanAnswerValue',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue',
        tsPropertyName: 'choiceAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue',
        tsPropertyName: 'multiChoiceAnswerValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI',
        tsPropertyName: 'haleyAnswerConstraintComparatorURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue',
        tsPropertyName: 'doubleAnswerValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue',
        tsPropertyName: 'textAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue',
        tsPropertyName: 'integerAnswerValue',
        type: 'number',
        required: false
      }
    ];
  }


}
