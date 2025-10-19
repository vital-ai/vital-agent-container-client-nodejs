import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatSubscription
 */
export class HaleyChatSubscription extends VITAL_Node {
  public haleyChatSubscriptionTermStatusURI?: string;
  public haleyChatSubscriptionEndDate?: string | Date;
  public haleyChatSubscriptionTrialEndDate?: string | Date;
  public haleyChatSubscriptionIdentifier?: string;
  public haleyChatSubscriptionStatusURI?: string;
  public haleyChatPaymentMethodActive?: boolean;
  public haleyChatSubscriptionLevelURI?: string;
  public haleyChatSubscriptionStatusMessage?: string;
  public haleyChatSubscriptionStartDate?: string | Date;
  public haleyChatSubscriptionTrialStartDate?: string | Date;
  public haleyChatSubscriptionInitialized?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatSubscription';
  }

  /**
   * Get property definitions for HaleyChatSubscription
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTermStatusURI',
        tsPropertyName: 'haleyChatSubscriptionTermStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEndDate',
        tsPropertyName: 'haleyChatSubscriptionEndDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialEndDate',
        tsPropertyName: 'haleyChatSubscriptionTrialEndDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionIdentifier',
        tsPropertyName: 'haleyChatSubscriptionIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusURI',
        tsPropertyName: 'haleyChatSubscriptionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodActive',
        tsPropertyName: 'haleyChatPaymentMethodActive',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionLevelURI',
        tsPropertyName: 'haleyChatSubscriptionLevelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStatusMessage',
        tsPropertyName: 'haleyChatSubscriptionStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionStartDate',
        tsPropertyName: 'haleyChatSubscriptionStartDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionTrialStartDate',
        tsPropertyName: 'haleyChatSubscriptionTrialStartDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionInitialized',
        tsPropertyName: 'haleyChatSubscriptionInitialized',
        type: 'boolean',
        required: false
      }
    ];
  }


}
