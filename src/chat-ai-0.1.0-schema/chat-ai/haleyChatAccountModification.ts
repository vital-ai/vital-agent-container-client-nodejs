import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAccountModification
 */
export class HaleyChatAccountModification extends VITAL_Node {
  public haleyChatAccountModificationTypeURI?: string;
  public haleyChatAccountModificationSourceString?: string;
  public haleyChatAccountModificationAccountSourceURI?: string;
  public haleyChatAccountModificationPriorSubscriptionStatusURI?: string;
  public haleyChatAccountModificationNewSubscriptionStatusURI?: string;
  public haleyChatLoginRoleURI?: string;
  public accountModificationStatusMessage?: string;
  public haleyChatAccountModificationDestinationString?: string;
  public accountModificationCreationDateTime?: string | Date;
  public haleyChatAccountModificationLoginSourceURI?: string;
  public accountModificationTrackingIdentifier?: string;
  public haleyChatAccountModificationStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAccountModification';
  }

  /**
   * Get property definitions for HaleyChatAccountModification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationTypeURI',
        tsPropertyName: 'haleyChatAccountModificationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationSourceString',
        tsPropertyName: 'haleyChatAccountModificationSourceString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationAccountSourceURI',
        tsPropertyName: 'haleyChatAccountModificationAccountSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationPriorSubscriptionStatusURI',
        tsPropertyName: 'haleyChatAccountModificationPriorSubscriptionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationNewSubscriptionStatusURI',
        tsPropertyName: 'haleyChatAccountModificationNewSubscriptionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatLoginRoleURI',
        tsPropertyName: 'haleyChatLoginRoleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationStatusMessage',
        tsPropertyName: 'accountModificationStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationDestinationString',
        tsPropertyName: 'haleyChatAccountModificationDestinationString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationCreationDateTime',
        tsPropertyName: 'accountModificationCreationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationLoginSourceURI',
        tsPropertyName: 'haleyChatAccountModificationLoginSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier',
        tsPropertyName: 'accountModificationTrackingIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountModificationStatusURI',
        tsPropertyName: 'haleyChatAccountModificationStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
