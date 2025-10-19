import { Question } from './question';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion
 */
export class MultiChoiceQuestion extends Question {
  public choiceListSource?: string;
  public multivalue?: boolean;
  public inputFactScope?: string;
  public inputPropertyName?: string;
  public renderQuickReplies?: boolean;
  public submitButtonLabel?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion';
  }

  /**
   * Get property definitions for MultiChoiceQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChoiceListSource',
        tsPropertyName: 'choiceListSource',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalue',
        tsPropertyName: 'multivalue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFactScope',
        tsPropertyName: 'inputFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRenderQuickReplies',
        tsPropertyName: 'renderQuickReplies',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubmitButtonLabel',
        tsPropertyName: 'submitButtonLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
