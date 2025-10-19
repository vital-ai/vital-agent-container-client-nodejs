import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogChatRules
 */
export class DialogChatRules extends DialogAction {
  public statusPropertyName?: string;
  public ignoreStandardIntents?: boolean;
  public inputFactScope?: string;
  public propertyName?: string;
  public intentPropertyName?: string;
  public propertyType?: string;
  public interruptedFactName?: string;
  public inputPropertyName?: string;
  public chatRuleProcessingType?: string;
  public outputMessagePropertyName?: string;
  public outputCardsPropertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogChatRules';
  }

  /**
   * Get property definitions for DialogChatRules
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusPropertyName',
        tsPropertyName: 'statusPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIntentPropertyName',
        tsPropertyName: 'intentPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyType',
        tsPropertyName: 'propertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInterruptedFactName',
        tsPropertyName: 'interruptedFactName',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleProcessingType',
        tsPropertyName: 'chatRuleProcessingType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOutputMessagePropertyName',
        tsPropertyName: 'outputMessagePropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOutputCardsPropertyName',
        tsPropertyName: 'outputCardsPropertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
