import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ClosePanelCommand
 */
export class ClosePanelCommand extends UserInterfaceCommandMessage {
  public panelName?: string;
  public haleyChatPanelDisplayModeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ClosePanelCommand';
  }

  /**
   * Get property definitions for ClosePanelCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPanelName',
        tsPropertyName: 'panelName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPanelDisplayModeURI',
        tsPropertyName: 'haleyChatPanelDisplayModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
