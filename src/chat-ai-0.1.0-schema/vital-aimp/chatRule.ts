import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatRule
 */
export class ChatRule extends VITAL_Node {
  public chatRuleSetURI?: string;
  public chatRuleID?: number;
  public chatRulePattern?: string;
  public chatRuleResponse?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatRule';
  }

  /**
   * Get property definitions for ChatRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleSetURI',
        tsPropertyName: 'chatRuleSetURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleID',
        tsPropertyName: 'chatRuleID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulePattern',
        tsPropertyName: 'chatRulePattern',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleResponse',
        tsPropertyName: 'chatRuleResponse',
        type: 'string',
        required: false
      }
    ];
  }


}
