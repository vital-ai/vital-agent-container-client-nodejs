import { BaseInteractionPart } from './baseInteractionPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountInteractionPart
 */
export class AccountInteractionPart extends BaseInteractionPart {
  public recipientAccountURI?: string;
  public senderAccountURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountInteractionPart';
  }

  /**
   * Get property definitions for AccountInteractionPart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientAccountURI',
        tsPropertyName: 'recipientAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderAccountURI',
        tsPropertyName: 'senderAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
