import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountTeam
 */
export class HaleyAccountTeam extends VITAL_Node {
  public accountTeamExternalIdentifier?: string;
  public accountTeamIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountTeam';
  }

  /**
   * Get property definitions for HaleyAccountTeam
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountTeamExternalIdentifier',
        tsPropertyName: 'accountTeamExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountTeamIdentifier',
        tsPropertyName: 'accountTeamIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
