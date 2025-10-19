import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogTextMessage
 */
export class DialogTextMessage extends DialogAction {
  public text?: string;
  public otherChannelTarget?: boolean;
  public textToSpeak?: string;
  public broadcastOnly?: boolean;
  public internalOnly?: boolean;
  public targetChannel?: string;
  public sendAsUser?: boolean;
  public currentChannelTarget?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogTextMessage';
  }

  /**
   * Get property definitions for DialogTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOtherChannelTarget',
        tsPropertyName: 'otherChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetChannel',
        tsPropertyName: 'targetChannel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsUser',
        tsPropertyName: 'sendAsUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget',
        tsPropertyName: 'currentChannelTarget',
        type: 'boolean',
        required: false
      }
    ];
  }


}
