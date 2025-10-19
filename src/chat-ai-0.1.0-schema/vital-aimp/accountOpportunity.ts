import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunity
 */
export class AccountOpportunity extends AIMPThing {
  public haleyChatPromotionURI?: string;
  public accountOpportunityIdentifier?: string;
  public accountOpportunityConvertDate?: string | Date;
  public accountOpportunityStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountOpportunity';
  }

  /**
   * Get property definitions for AccountOpportunity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionURI',
        tsPropertyName: 'haleyChatPromotionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityIdentifier',
        tsPropertyName: 'accountOpportunityIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityConvertDate',
        tsPropertyName: 'accountOpportunityConvertDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityStatusURI',
        tsPropertyName: 'accountOpportunityStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
