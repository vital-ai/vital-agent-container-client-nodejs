import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AcceptLoginChangeAdminRequest
 */
export class AcceptLoginChangeAdminRequest extends HaleyChatAdminCommand {
  public accountModificationTrackingIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AcceptLoginChangeAdminRequest';
  }

  /**
   * Get property definitions for AcceptLoginChangeAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier',
        tsPropertyName: 'accountModificationTrackingIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
