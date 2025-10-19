import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Sms
 */
export class Sms extends VITAL_Node {
  public mms?: boolean;
  public sender?: string;
  public messageID?: string;
  public dateSent?: string | Date;
  public bodyPlain?: string;
  declare public recipient?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Sms';
  }

  /**
   * Get property definitions for Sms
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMms',
        tsPropertyName: 'mms',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageID',
        tsPropertyName: 'messageID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDateSent',
        tsPropertyName: 'dateSent',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBodyPlain',
        tsPropertyName: 'bodyPlain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      }
    ];
  }


}
