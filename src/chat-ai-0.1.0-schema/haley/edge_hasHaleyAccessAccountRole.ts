import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole
 */
export class Edge_hasHaleyAccessAccountRole extends VITAL_PeerEdge {
  public accessRoleScopeLoginURI?: string;
  public accessRoleScopeBotURI?: string;
  public accessRoleScopeGroupURI?: string;
  public accessRoleScopeChannelURI?: string;
  public accessRoleScopeDatasetURI?: string;
  public accessRoleScopeURI?: string;
  public accessRoleScopeAccountURI?: string;
  public accessRoleScopeTeamURI?: string;
  public accessRoleScopeOfficeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccessAccountRole
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI',
        tsPropertyName: 'accessRoleScopeLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI',
        tsPropertyName: 'accessRoleScopeBotURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeGroupURI',
        tsPropertyName: 'accessRoleScopeGroupURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI',
        tsPropertyName: 'accessRoleScopeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI',
        tsPropertyName: 'accessRoleScopeDatasetURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeURI',
        tsPropertyName: 'accessRoleScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI',
        tsPropertyName: 'accessRoleScopeAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI',
        tsPropertyName: 'accessRoleScopeTeamURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI',
        tsPropertyName: 'accessRoleScopeOfficeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessAccountRole
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessAccountRole';
  }
}
