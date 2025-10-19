import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityMember
 */
export class AccountOpportunityMember extends AIMPThing {
  public memberEmailAddress?: string;
  public memberEmailAddressValidated?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountOpportunityMember';
  }

  /**
   * Get property definitions for AccountOpportunityMember
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMemberEmailAddress',
        tsPropertyName: 'memberEmailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMemberEmailAddressValidated',
        tsPropertyName: 'memberEmailAddressValidated',
        type: 'boolean',
        required: false
      }
    ];
  }


}
