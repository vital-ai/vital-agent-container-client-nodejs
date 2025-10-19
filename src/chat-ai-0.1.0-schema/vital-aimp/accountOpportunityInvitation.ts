import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityInvitation
 */
export class AccountOpportunityInvitation extends VITAL_Node {
  public accountOpportunityInvitationStatusURI?: string;
  public accountOpportunityInvitationEmail?: string;
  public accountOpportunityInvitationCode?: string;
  public accountOpportunityInvitationDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountOpportunityInvitation';
  }

  /**
   * Get property definitions for AccountOpportunityInvitation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationStatusURI',
        tsPropertyName: 'accountOpportunityInvitationStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationEmail',
        tsPropertyName: 'accountOpportunityInvitationEmail',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationCode',
        tsPropertyName: 'accountOpportunityInvitationCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationDate',
        tsPropertyName: 'accountOpportunityInvitationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
