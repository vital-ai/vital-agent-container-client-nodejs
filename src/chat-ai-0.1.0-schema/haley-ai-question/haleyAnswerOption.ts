import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption
 */
export class HaleyAnswerOption extends VITAL_Node {
  public optionName?: string;
  public optionURL?: string;
  public optionLargeImageURL?: string;
  public optionSmallImageURL?: string;
  public optionMediumImageURL?: string;
  public suppressedAnswerOption?: boolean;
  public optionValue?: string;
  public optionOrder?: number;
  public optionImageURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption';
  }

  /**
   * Get property definitions for HaleyAnswerOption
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionName',
        tsPropertyName: 'optionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionURL',
        tsPropertyName: 'optionURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionLargeImageURL',
        tsPropertyName: 'optionLargeImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionSmallImageURL',
        tsPropertyName: 'optionSmallImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionMediumImageURL',
        tsPropertyName: 'optionMediumImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedAnswerOption',
        tsPropertyName: 'suppressedAnswerOption',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionValue',
        tsPropertyName: 'optionValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionOrder',
        tsPropertyName: 'optionOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionImageURL',
        tsPropertyName: 'optionImageURL',
        type: 'string',
        required: false
      }
    ];
  }


}
