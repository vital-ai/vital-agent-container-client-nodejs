import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Card
 */
export class Card extends VITAL_Node {
  public index?: number;
  public haleyChatPanelURI?: string;
  public haleyChatInteractionURI?: string;
  public aIMPMessageContentURI?: string;
  public cardText?: string;
  public haleyChatMessageURI?: string;
  public sendAsAttachment?: boolean;
  public haleyChatDisplayTargetURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Card';
  }

  /**
   * Get property definitions for Card
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPanelURI',
        tsPropertyName: 'haleyChatPanelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContentURI',
        tsPropertyName: 'aIMPMessageContentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardText',
        tsPropertyName: 'cardText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsAttachment',
        tsPropertyName: 'sendAsAttachment',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDisplayTargetURI',
        tsPropertyName: 'haleyChatDisplayTargetURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
