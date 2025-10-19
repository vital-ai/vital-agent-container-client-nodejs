import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPanelDisplayState
 */
export class HaleyChatPanelDisplayState extends VITAL_Node {
  public haleyChatPanelDisplayModeURI?: string;
  public haleyChatCardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPanelDisplayState';
  }

  /**
   * Get property definitions for HaleyChatPanelDisplayState
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPanelDisplayModeURI',
        tsPropertyName: 'haleyChatPanelDisplayModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCardURI',
        tsPropertyName: 'haleyChatCardURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
