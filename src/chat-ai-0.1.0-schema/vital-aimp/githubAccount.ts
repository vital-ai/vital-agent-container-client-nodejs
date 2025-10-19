import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GithubAccount
 */
export class GithubAccount extends VITAL_Node {
  public githubInstallationIdentifier?: number;
  public githubOrganization?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GithubAccount';
  }

  /**
   * Get property definitions for GithubAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGithubInstallationIdentifier',
        tsPropertyName: 'githubInstallationIdentifier',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGithubOrganization',
        tsPropertyName: 'githubOrganization',
        type: 'string',
        required: false
      }
    ];
  }


}
