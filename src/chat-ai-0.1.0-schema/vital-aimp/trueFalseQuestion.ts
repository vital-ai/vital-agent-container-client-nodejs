import { Question } from './question';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TrueFalseQuestion
 */
export class TrueFalseQuestion extends Question {
  public choiceListSource?: string;
  public trueAnswerOnly?: boolean;
  public trueLabel?: string;
  public inputFactScope?: string;
  public inputPropertyName?: string;
  public renderQuickReplies?: boolean;
  public falseLabel?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TrueFalseQuestion';
  }

  /**
   * Get property definitions for TrueFalseQuestion
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTrueAnswerOnly',
        tsPropertyName: 'trueAnswerOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTrueLabel',
        tsPropertyName: 'trueLabel',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFalseLabel',
        tsPropertyName: 'falseLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
